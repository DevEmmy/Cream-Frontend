import axios from "axios";
import { LocationMarker, Trash } from "heroicons-react";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TimeAgo from "timeago-react";
import globalApi from "../../../api";
import { useGetUserDetails } from "../../../application/hooks/queryhooks";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { EachContainer } from "./RealEstate.Style";
import Swal from "sweetalert2";
import { SpinnerCircular } from "spinners-react";
import theme from "../../../application/utils/Theme";
import building6 from "./Image/building6.jpg";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const EachRealEstate = ({ active }) => {
  const top = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const data = useGetUserDetails();
  const [loading, setLoading] = useState(true);

  const getAList = useCallback(async () => {
    await axios
      .get(`${globalApi}/listings/each/${id}`)
      .then((resp) => {
        setLoading(false);
        setProperty(resp.data);
      })
      .catch((err) => {
        getAList()
        console.error(err);
      });

    axios
      .patch(`${globalApi}/listings/view/${id}`, {}, setConfig())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, [id]);

  const deleteListings = () => {
    axios
      .delete(`${globalApi}/listings/delete/${id}`, setConfig())
      .then((resp) => {
        console.log(resp.data);
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this Property?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteListings();
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
      }
    });
  };

  const formatLocation = (location) => {
    let list = null;
    if (location) {
      list = location.split("#");
      list = list.join(", ");
    }

    return list;
  };

  useEffect(() => {
    getAList();
    scrollToRef(top);
  }, [getAList]);

  return (
    <Fragment>
      <Navbar active={1} />
      <EachContainer ref={top}>
        {loading ? (
          <>
            <div className="loader">
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={theme.color}
                size={50}
                thickness={150}
              />
            </div>
          </>
        ) : (
          <>
            <div className="titles">
              <h3>{property.title}</h3>
              {
                property.forRent === false ? <h4>&#x20A6; {property.price.toLocaleString()} </h4> : <h4>&#x20A6; {property.price.toLocaleString()} /day</h4>
              }
              <p>
                <LocationMarker size="16px" />{" "}
                {formatLocation(property.location)}
              </p>
            </div>

            <div className="images">
              <div className="image1">
                <img src={property?.images && property.images[0]} alt="" />
              </div>
              <div className="grid">
                <img src={property?.images && property.images[1]} alt="" />
                <img src={property?.images && property.images[2]} alt="" />
                <img
                  src={property?.images && property.images[3]}
                  alt=""
                  loading="loading..."
                />
              </div>
              <p>
                Listed <TimeAgo datetime={property.createdAt} />
              </p>
              <Link to={`/real-estate/${id}/media`}>
                <div className="viewMedia">View Images & Videos</div>
              </Link>
            </div>

            <div className="amenities">
              <div className="details">
                <h3>Amenities</h3>
                {property.features?.map((feature, i) => {
                  return <p key={i}>{feature}</p>;
                })}
              </div>
            </div>

            <div className="description">
              <div className="details">
                <h3>Description</h3>
                <p>{property.description}</p>
              </div>

              {property.postedBy?._id !== data?._id ? (
                <div className="seller">
                  <h3>Contact Seller</h3>

                  <div className="container">
                    <div className="first">
                      <div>
                        <h3>
                          {property.postedBy?.firstName +
                            " " +
                            property.postedBy?.lastName}
                        </h3>
                        <p className="small">{property.postedBy?.address}</p>
                        <p className="small">
                          Joined{" "}
                          {new Date(property.postedBy?.createdAt).getFullYear()}
                        </p>
                      </div>

                      <div className="btns">
                        <div className="btn filled">Send Message</div>

                        <Link
                          to={`/profile/${property.postedBy?._id}`}
                          className="btn"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>

                    <div className="second">
                      <img
                        src={property.postedBy?.profilePicture}
                        alt={property.postedBy?.firstName}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="delete">
                  <h3>Delete Listing</h3>
                  <p>Once you delete a listing, it cannot be reversed</p>
                  <div className="actionBtn" onClick={confirmDelete}>
                    <Trash color="white" /> Delete Listing
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </EachContainer>
      <Banner category="Real Estate" img={building6}/>
      <Footer />
    </Fragment>
  );
};

export default EachRealEstate;
